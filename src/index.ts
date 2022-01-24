import { aws_s3 } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface PrivateBucketProps extends aws_s3.BucketProps {}

export class PrivateBucket extends aws_s3.Bucket {
  constructor(scope: Construct, id: string, props: PrivateBucketProps = {}) {
    super(scope, id, {
      encryption: aws_s3.BucketEncryption.S3_MANAGED,
      ...props,
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });
  }
}
