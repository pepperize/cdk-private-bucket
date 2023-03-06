import { Aspects, aws_s3, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { BucketPrivacy } from "../src";

describe("PrivateBucket", () => {
  it("should have encryption", () => {
    // Given
    const stack = new Stack();
    // When
    new aws_s3.Bucket(stack, "id");
    Aspects.of(stack).add(new BucketPrivacy());
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
    new aws_s3.Bucket(stack, "id");
    Aspects.of(stack).add(new BucketPrivacy());
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
  it("should match snapshot", () => {
    // Given
    const stack = new Stack();
    // When
    new aws_s3.Bucket(stack, "id");
    Aspects.of(stack).add(new BucketPrivacy());
    // Then
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
