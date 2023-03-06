import { aws_s3, IAspect } from "aws-cdk-lib";
import { IConstruct } from "constructs";

export class BucketPrivacy implements IAspect {
  visit(node: IConstruct): void {
    if (node instanceof aws_s3.CfnBucket) {
      const bucket = node as aws_s3.CfnBucket;

      bucket.bucketEncryption = {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              kmsMasterKeyId: undefined,
              sseAlgorithm: "AES256",
            },
          },
        ],
      };

      bucket.publicAccessBlockConfiguration = {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      };
    }

    if (node instanceof aws_s3.CfnBucketPolicy) {
      const bucketPolicy = node as aws_s3.CfnBucketPolicy;
      console.log(bucketPolicy.policyDocument);
    }
  }
}
