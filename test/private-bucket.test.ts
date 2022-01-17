import { Capture, Template } from "@aws-cdk/assertions";
import { Stack } from "@aws-cdk/core";
import { PrivateBucket } from "../src";

describe("PrivateBucket", () => {
  it("should have encryption", () => {
    // Given
    const stack = new Stack();
    // When
    new PrivateBucket(stack, "id");
    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::S3::Bucket", {
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
    });
  });
  it("should block public access", () => {
    // Given
    const stack = new Stack();
    // When
    new PrivateBucket(stack, "id");
    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });
  it("should enforce SSL", () => {
    // Given
    const stack = new Stack();
    // When
    new PrivateBucket(stack, "id");
    // Then
    const template = Template.fromStack(stack);
    const capture = new Capture();
    template.hasResourceProperties("AWS::S3::BucketPolicy", {
      PolicyDocument: {
        Statement: [capture],
      },
    });
    expect(capture.asObject()).toMatchObject({
      Action: "s3:*",
      Condition: {
        Bool: {
          "aws:SecureTransport": "false",
        },
      },
      Effect: "Deny",
      Principal: {
        AWS: "*",
      },
    });
  });
  it("should match snapshot", () => {
    // Given
    const stack = new Stack();
    // When
    new PrivateBucket(stack, "id");
    // Then
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
