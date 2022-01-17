import * as s3 from "@aws-cdk/aws-s3";

import { BucketEncryption } from "@aws-cdk/aws-s3";
import { BlockPublicAccess } from "@aws-cdk/aws-s3/lib/bucket";
import { Construct } from "@aws-cdk/core";

export interface PrivateBucketProps extends s3.BucketProps {
  /**
   * The kind of server-side encryption to apply to this bucket.
   * If you choose KMS, you can specify a KMS key via encryptionKey. If encryption key is not specified, a key will automatically be created.
   * @stability: stable
   * @default: s3.BucketEncryption.S3_MANAGED
   */
  readonly encryption?: BucketEncryption;

  /**
   * The block public access configuration of this bucket. It MUST be blocked to achieve privacy.
   * @stability: stable
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html}
   * @deprecated
   * @default s3.BlockPublicAccess.BLOCK_ALL
   */
  readonly blockPublicAccess?: BlockPublicAccess;
  /**
   * Enforces SSL for requests. It MUST be enforced to achieve privacy.
   * S3.5 of the AWS Foundational Security Best Practices Regarding S3.
   * @stability: stable
   * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html}
   * @deprecated
   * @default true
   */
  readonly enforceSSL?: boolean;
}

/**
 * A privacy-oriented S3 Bucket.
 */
export class PrivateBucket extends s3.Bucket {
  constructor(
    scope: Construct,
    id: string,
    props: PrivateBucketProps = { encryption: s3.BucketEncryption.S3_MANAGED }
  ) {
    super(scope, id, {
      ...props,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });
  }
}
