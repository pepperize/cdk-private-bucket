# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### PrivateBucket <a name="@pepperize/cdk-private-bucket.PrivateBucket" id="pepperizecdkprivatebucketprivatebucket"></a>

#### Initializers <a name="@pepperize/cdk-private-bucket.PrivateBucket.Initializer" id="pepperizecdkprivatebucketprivatebucketinitializer"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

new PrivateBucket(scope: Construct, id: string, props?: PrivateBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkprivatebucketprivatebucketparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdkprivatebucketprivatebucketparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkprivatebucketprivatebucketparameterprops) | [`@pepperize/cdk-private-bucket.PrivateBucketProps`](#@pepperize/cdk-private-bucket.PrivateBucketProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucket.parameter.scope" id="pepperizecdkprivatebucketprivatebucketparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucket.parameter.id" id="pepperizecdkprivatebucketprivatebucketparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucket.parameter.props" id="pepperizecdkprivatebucketprivatebucketparameterprops"></a>

- *Type:* [`@pepperize/cdk-private-bucket.PrivateBucketProps`](#@pepperize/cdk-private-bucket.PrivateBucketProps)

---





## Structs <a name="Structs" id="structs"></a>

### PrivateBucketProps <a name="@pepperize/cdk-private-bucket.PrivateBucketProps" id="pepperizecdkprivatebucketprivatebucketprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PrivateBucketProps } from '@pepperize/cdk-private-bucket'

const privateBucketProps: PrivateBucketProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accessControl`](#pepperizecdkprivatebucketprivatebucketpropspropertyaccesscontrol) | [`aws-cdk-lib.aws_s3.BucketAccessControl`](#aws-cdk-lib.aws_s3.BucketAccessControl) | Specifies a canned ACL that grants predefined permissions to the bucket. |
| [`autoDeleteObjects`](#pepperizecdkprivatebucketprivatebucketpropspropertyautodeleteobjects) | `boolean` | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| [`blockPublicAccess`](#pepperizecdkprivatebucketprivatebucketpropspropertyblockpublicaccess) | [`aws-cdk-lib.aws_s3.BlockPublicAccess`](#aws-cdk-lib.aws_s3.BlockPublicAccess) | The block public access configuration of this bucket. |
| [`bucketKeyEnabled`](#pepperizecdkprivatebucketprivatebucketpropspropertybucketkeyenabled) | `boolean` | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| [`bucketName`](#pepperizecdkprivatebucketprivatebucketpropspropertybucketname) | `string` | Physical name of this bucket. |
| [`cors`](#pepperizecdkprivatebucketprivatebucketpropspropertycors) | [`aws-cdk-lib.aws_s3.CorsRule`](#aws-cdk-lib.aws_s3.CorsRule)[] | The CORS configuration of this bucket. |
| [`encryption`](#pepperizecdkprivatebucketprivatebucketpropspropertyencryption) | [`aws-cdk-lib.aws_s3.BucketEncryption`](#aws-cdk-lib.aws_s3.BucketEncryption) | The kind of server-side encryption to apply to this bucket. |
| [`encryptionKey`](#pepperizecdkprivatebucketprivatebucketpropspropertyencryptionkey) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | External KMS key to use for bucket encryption. |
| [`enforceSSL`](#pepperizecdkprivatebucketprivatebucketpropspropertyenforcessl) | `boolean` | Enforces SSL for requests. |
| [`eventBridgeEnabled`](#pepperizecdkprivatebucketprivatebucketpropspropertyeventbridgeenabled) | `boolean` | Whether this bucket should send notifications to Amazon EventBridge or not. |
| [`intelligentTieringConfigurations`](#pepperizecdkprivatebucketprivatebucketpropspropertyintelligenttieringconfigurations) | [`aws-cdk-lib.aws_s3.IntelligentTieringConfiguration`](#aws-cdk-lib.aws_s3.IntelligentTieringConfiguration)[] | Inteligent Tiering Configurations. |
| [`inventories`](#pepperizecdkprivatebucketprivatebucketpropspropertyinventories) | [`aws-cdk-lib.aws_s3.Inventory`](#aws-cdk-lib.aws_s3.Inventory)[] | The inventory configuration of the bucket. |
| [`lifecycleRules`](#pepperizecdkprivatebucketprivatebucketpropspropertylifecyclerules) | [`aws-cdk-lib.aws_s3.LifecycleRule`](#aws-cdk-lib.aws_s3.LifecycleRule)[] | Rules that define how Amazon S3 manages objects during their lifetime. |
| [`metrics`](#pepperizecdkprivatebucketprivatebucketpropspropertymetrics) | [`aws-cdk-lib.aws_s3.BucketMetrics`](#aws-cdk-lib.aws_s3.BucketMetrics)[] | The metrics configuration of this bucket. |
| [`objectOwnership`](#pepperizecdkprivatebucketprivatebucketpropspropertyobjectownership) | [`aws-cdk-lib.aws_s3.ObjectOwnership`](#aws-cdk-lib.aws_s3.ObjectOwnership) | The objectOwnership of the bucket. |
| [`publicReadAccess`](#pepperizecdkprivatebucketprivatebucketpropspropertypublicreadaccess) | `boolean` | Grants public read access to all objects in the bucket. |
| [`removalPolicy`](#pepperizecdkprivatebucketprivatebucketpropspropertyremovalpolicy) | [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy) | Policy to apply when the bucket is removed from this stack. |
| [`serverAccessLogsBucket`](#pepperizecdkprivatebucketprivatebucketpropspropertyserveraccesslogsbucket) | [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket) | Destination bucket for the server access logs. |
| [`serverAccessLogsPrefix`](#pepperizecdkprivatebucketprivatebucketpropspropertyserveraccesslogsprefix) | `string` | Optional log file prefix to use for the bucket's access logs. |
| [`transferAcceleration`](#pepperizecdkprivatebucketprivatebucketpropspropertytransferacceleration) | `boolean` | Whether this bucket should have transfer acceleration turned on or not. |
| [`versioned`](#pepperizecdkprivatebucketprivatebucketpropspropertyversioned) | `boolean` | Whether this bucket should have versioning turned on or not. |
| [`websiteErrorDocument`](#pepperizecdkprivatebucketprivatebucketpropspropertywebsiteerrordocument) | `string` | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| [`websiteIndexDocument`](#pepperizecdkprivatebucketprivatebucketpropspropertywebsiteindexdocument) | `string` | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| [`websiteRedirect`](#pepperizecdkprivatebucketprivatebucketpropspropertywebsiteredirect) | [`aws-cdk-lib.aws_s3.RedirectTarget`](#aws-cdk-lib.aws_s3.RedirectTarget) | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| [`websiteRoutingRules`](#pepperizecdkprivatebucketprivatebucketpropspropertywebsiteroutingrules) | [`aws-cdk-lib.aws_s3.RoutingRule`](#aws-cdk-lib.aws_s3.RoutingRule)[] | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `accessControl`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.accessControl" id="pepperizecdkprivatebucketprivatebucketpropspropertyaccesscontrol"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* [`aws-cdk-lib.aws_s3.BucketAccessControl`](#aws-cdk-lib.aws_s3.BucketAccessControl)
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.autoDeleteObjects" id="pepperizecdkprivatebucketprivatebucketpropspropertyautodeleteobjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.  **Warning** if you have deployed a bucket with `autoDeleteObjects: true`, switching this to `false` in a CDK version *before* `1.126.0` will lead to all objects in the bucket being deleted. Be sure to update your bucket resources by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.blockPublicAccess" id="pepperizecdkprivatebucketprivatebucketpropspropertyblockpublicaccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* [`aws-cdk-lib.aws_s3.BlockPublicAccess`](#aws-cdk-lib.aws_s3.BlockPublicAccess)
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketKeyEnabled" id="pepperizecdkprivatebucketprivatebucketpropspropertybucketkeyenabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* false

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Only relevant, when Encryption is set to {@link BucketEncryption.KMS}

---

##### `bucketName`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketName" id="pepperizecdkprivatebucketprivatebucketpropspropertybucketname"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* `string`
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.cors" id="pepperizecdkprivatebucketprivatebucketpropspropertycors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* [`aws-cdk-lib.aws_s3.CorsRule`](#aws-cdk-lib.aws_s3.CorsRule)[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html

---

##### `encryption`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryption" id="pepperizecdkprivatebucketprivatebucketpropspropertyencryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* [`aws-cdk-lib.aws_s3.BucketEncryption`](#aws-cdk-lib.aws_s3.BucketEncryption)
- *Default:* `Kms` if `encryptionKey` is specified, or `Unencrypted` otherwise.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryptionKey" id="pepperizecdkprivatebucketprivatebucketpropspropertyencryptionkey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* If encryption is set to "Kms" and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The 'encryption' property must be either not specified or set to "Kms". An error will be emitted if encryption is set to "Unencrypted" or "Managed".

---

##### `enforceSSL`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.enforceSSL" id="pepperizecdkprivatebucketprivatebucketpropspropertyenforcessl"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* `boolean`
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.eventBridgeEnabled" id="pepperizecdkprivatebucketprivatebucketpropspropertyeventbridgeenabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.intelligentTieringConfigurations" id="pepperizecdkprivatebucketprivatebucketpropspropertyintelligenttieringconfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* [`aws-cdk-lib.aws_s3.IntelligentTieringConfiguration`](#aws-cdk-lib.aws_s3.IntelligentTieringConfiguration)[]
- *Default:* No Intelligent Tiiering Configurations.

Inteligent Tiering Configurations.

> https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html

---

##### `inventories`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.inventories" id="pepperizecdkprivatebucketprivatebucketpropspropertyinventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* [`aws-cdk-lib.aws_s3.Inventory`](#aws-cdk-lib.aws_s3.Inventory)[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html

---

##### `lifecycleRules`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.lifecycleRules" id="pepperizecdkprivatebucketprivatebucketpropspropertylifecyclerules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* [`aws-cdk-lib.aws_s3.LifecycleRule`](#aws-cdk-lib.aws_s3.LifecycleRule)[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.metrics" id="pepperizecdkprivatebucketprivatebucketpropspropertymetrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* [`aws-cdk-lib.aws_s3.BucketMetrics`](#aws-cdk-lib.aws_s3.BucketMetrics)[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html

---

##### `objectOwnership`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectOwnership" id="pepperizecdkprivatebucketprivatebucketpropspropertyobjectownership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* [`aws-cdk-lib.aws_s3.ObjectOwnership`](#aws-cdk-lib.aws_s3.ObjectOwnership)
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the bucket.

> https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html

---

##### `publicReadAccess`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.publicReadAccess" id="pepperizecdkprivatebucketprivatebucketpropspropertypublicreadaccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* `boolean`
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.removalPolicy" id="pepperizecdkprivatebucketprivatebucketpropspropertyremovalpolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy)
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsBucket" id="pepperizecdkprivatebucketprivatebucketpropspropertyserveraccesslogsbucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket)
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsPrefix" id="pepperizecdkprivatebucketprivatebucketpropspropertyserveraccesslogsprefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* `string`
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.transferAcceleration" id="pepperizecdkprivatebucketprivatebucketpropspropertytransferacceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.versioned" id="pepperizecdkprivatebucketprivatebucketpropspropertyversioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteErrorDocument" id="pepperizecdkprivatebucketprivatebucketpropspropertywebsiteerrordocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* `string`
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteIndexDocument" id="pepperizecdkprivatebucketprivatebucketpropspropertywebsiteindexdocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* `string`
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRedirect" id="pepperizecdkprivatebucketprivatebucketpropspropertywebsiteredirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* [`aws-cdk-lib.aws_s3.RedirectTarget`](#aws-cdk-lib.aws_s3.RedirectTarget)
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRoutingRules" id="pepperizecdkprivatebucketprivatebucketpropspropertywebsiteroutingrules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* [`aws-cdk-lib.aws_s3.RoutingRule`](#aws-cdk-lib.aws_s3.RoutingRule)[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---



