# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateBucket <a name="PrivateBucket" id="@pepperize/cdk-private-bucket.PrivateBucket"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable, aws-cdk-lib.IResource, aws-cdk-lib.interfaces.IEnvironmentAware, aws-cdk-lib.aws_s3.IBucket, aws-cdk-lib.interfaces.aws_s3.IBucketRef, aws-cdk-lib.aws_iam.IEncryptedResource

#### Initializers <a name="Initializers" id="@pepperize/cdk-private-bucket.PrivateBucket.Initializer"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

new PrivateBucket(scope: Construct, id: string, props?: PrivateBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps">PrivateBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-private-bucket.PrivateBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-private-bucket.PrivateBucketProps">PrivateBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addReplicationPolicy">addReplicationPolicy</a></code> | Adds resource policy statements to this bucket that permit cross-account replication. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantOnKey">grantOnKey</a></code> | Gives permissions to a grantable entity to perform actions on the encryption key. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantPutAcl">grantPutAcl</a></code> | The use of this method is discouraged. Please use `grants.putAcl()` instead. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and its contents to an IAM principal (Role/Group/User). |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantReadWrite">grantReadWrite</a></code> | The use of this method is discouraged. Please use `grants.readWrite()` instead. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantReplicationPermission">grantReplicationPermission</a></code> | Grant replication permission to a principal. This method allows the principal to perform replication operations on this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.grantWrite">grantWrite</a></code> | The use of this method is discouraged. Please use `grants.write()` instead. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-private-bucket.PrivateBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@pepperize/cdk-private-bucket.PrivateBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@pepperize/cdk-private-bucket.PrivateBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@pepperize/cdk-private-bucket.PrivateBucket.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@pepperize/cdk-private-bucket.PrivateBucket.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-private-bucket.PrivateBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-private-bucket.PrivateBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@pepperize/cdk-private-bucket.PrivateBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   const filter: s3.NotificationKeyFilter = { prefix: 'home/myusername/*' };
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), filter);
```


###### `event`<sup>Required</sup> <a name="event" id="@pepperize/cdk-private-bucket.PrivateBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@pepperize/cdk-private-bucket.PrivateBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@pepperize/cdk-private-bucket.PrivateBucket.addEventNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@pepperize/cdk-private-bucket.PrivateBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addReplicationPolicy` <a name="addReplicationPolicy" id="@pepperize/cdk-private-bucket.PrivateBucket.addReplicationPolicy"></a>

```typescript
public addReplicationPolicy(roleArn: string, accessControlTransition?: boolean, account?: string): void
```

Adds resource policy statements to this bucket that permit cross-account replication.

Call this method on the destination bucket. If the destination bucket is a referenced bucket,
its policy cannot be modified by CDK and the permissions must be added in the destination
account.

To change replica ownership to the destination bucket owner, set `accessControlTransition` to
true and provide the source bucket owner's account ID.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html)

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@pepperize/cdk-private-bucket.PrivateBucket.addReplicationPolicy.parameter.roleArn"></a>

- *Type:* string

The ARN of the source bucket's replication role.

---

###### `accessControlTransition`<sup>Optional</sup> <a name="accessControlTransition" id="@pepperize/cdk-private-bucket.PrivateBucket.addReplicationPolicy.parameter.accessControlTransition"></a>

- *Type:* boolean

Whether to change replica ownership to the destination bucket owner.

---

###### `account`<sup>Optional</sup> <a name="account" id="@pepperize/cdk-private-bucket.PrivateBucket.addReplicationPolicy.parameter.account"></a>

- *Type:* string

The source bucket owner's AWS account ID.

Required when `accessControlTransition` is true.

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@pepperize/cdk-private-bucket.PrivateBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@pepperize/cdk-private-bucket.PrivateBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@pepperize/cdk-private-bucket.PrivateBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@pepperize/cdk-private-bucket.PrivateBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@pepperize/cdk-private-bucket.PrivateBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

The use of this method is discouraged. Please use `grants.delete()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantOnKey` <a name="grantOnKey" id="@pepperize/cdk-private-bucket.PrivateBucket.grantOnKey"></a>

```typescript
public grantOnKey(grantee: IGrantable, actions: ...string[]): GrantOnKeyResult
```

Gives permissions to a grantable entity to perform actions on the encryption key.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-private-bucket.PrivateBucket.grantOnKey.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@pepperize/cdk-private-bucket.PrivateBucket.grantOnKey.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: ...string[], keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.


The use of this method is discouraged. Please use `grants.publicAccess()` instead.

[disable-awslint:no-grants]

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* ...string[]

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.


The use of this method is discouraged. Please use `grants.put()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

The use of this method is discouraged. Please use `grants.putAcl()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@pepperize/cdk-private-bucket.PrivateBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and its contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.


The use of this method is discouraged. Please use `grants.read()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

The use of this method is discouraged. Please use `grants.readWrite()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantReplicationPermission` <a name="grantReplicationPermission" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReplicationPermission"></a>

```typescript
public grantReplicationPermission(identity: IGrantable, props: GrantReplicationPermissionProps): Grant
```

Grant replication permission to a principal. This method allows the principal to perform replication operations on this bucket.

Note that when calling this function for source or destination buckets that support KMS encryption,
you need to specify the KMS key for encryption and the KMS key for decryption, respectively.


The use of this method is discouraged. Please use `grants.replicationPermission()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReplicationPermission.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant replication permission to.

---

###### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-private-bucket.PrivateBucket.grantReplicationPermission.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_s3.GrantReplicationPermissionProps

The properties of the replication source and destination buckets.

---

##### `grantWrite` <a name="grantWrite" id="@pepperize/cdk-private-bucket.PrivateBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

The use of this method is discouraged. Please use `grants.write()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@pepperize/cdk-private-bucket.PrivateBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@pepperize/cdk-private-bucket.PrivateBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@pepperize/cdk-private-bucket.PrivateBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-private-bucket.PrivateBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@pepperize/cdk-private-bucket.PrivateBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@pepperize/cdk-private-bucket.PrivateBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@pepperize/cdk-private-bucket.PrivateBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@pepperize/cdk-private-bucket.PrivateBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-private-bucket.PrivateBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@pepperize/cdk-private-bucket.PrivateBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@pepperize/cdk-private-bucket.PrivateBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@pepperize/cdk-private-bucket.PrivateBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@pepperize/cdk-private-bucket.PrivateBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-private-bucket.PrivateBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@pepperize/cdk-private-bucket.PrivateBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@pepperize/cdk-private-bucket.PrivateBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@pepperize/cdk-private-bucket.PrivateBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@pepperize/cdk-private-bucket.PrivateBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@pepperize/cdk-private-bucket.PrivateBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@pepperize/cdk-private-bucket.PrivateBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@pepperize/cdk-private-bucket.PrivateBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@pepperize/cdk-private-bucket.PrivateBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@pepperize/cdk-private-bucket.PrivateBucket.isConstruct"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-private-bucket.PrivateBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@pepperize/cdk-private-bucket.PrivateBucket.isOwnedResource"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-private-bucket.PrivateBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-private-bucket.PrivateBucket.isResource"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-private-bucket.PrivateBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketArn"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketAttributes"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketName"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@pepperize/cdk-private-bucket.PrivateBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@pepperize/cdk-private-bucket.PrivateBucket.fromCfnBucket"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@pepperize/cdk-private-bucket.PrivateBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@pepperize/cdk-private-bucket.PrivateBucket.validateBucketName"></a>

```typescript
import { PrivateBucket } from '@pepperize/cdk-private-bucket'

PrivateBucket.validateBucketName(physicalName: string, allowLegacyBucketNaming?: boolean)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@pepperize/cdk-private-bucket.PrivateBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

###### `allowLegacyBucketNaming`<sup>Optional</sup> <a name="allowLegacyBucketNaming" id="@pepperize/cdk-private-bucket.PrivateBucket.validateBucketName.parameter.allowLegacyBucketNaming"></a>

- *Type:* boolean

allow legacy bucket naming style, default is false.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketRef">bucketRef</a></code> | <code>aws-cdk-lib.interfaces.aws_s3.BucketReference</code> | A reference to a Bucket resource. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_s3.BucketGrants</code> | Collection of grant methods for a Bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The default server-side encryption mode that S3 applies to new objects in this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.disallowPublicAccess">disallowPublicAccess</a></code> | <code>boolean</code> | Whether to disallow public access. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.replicationRoleArn">replicationRoleArn</a></code> | <code>string</code> | Role used to set up permissions on this bucket for replication. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-private-bucket.PrivateBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-private-bucket.PrivateBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-private-bucket.PrivateBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRef`<sup>Required</sup> <a name="bucketRef" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketRef"></a>

```typescript
public readonly bucketRef: BucketReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_s3.BucketReference

A reference to a Bucket resource.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@pepperize/cdk-private-bucket.PrivateBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `grants`<sup>Required</sup> <a name="grants" id="@pepperize/cdk-private-bucket.PrivateBucket.property.grants"></a>

```typescript
public readonly grants: BucketGrants;
```

- *Type:* aws-cdk-lib.aws_s3.BucketGrants

Collection of grant methods for a Bucket.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@pepperize/cdk-private-bucket.PrivateBucket.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption

The default server-side encryption mode that S3 applies to new objects in this bucket.

`UNENCRYPTED` is never returned; see `IBucket.encryption`.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@pepperize/cdk-private-bucket.PrivateBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@pepperize/cdk-private-bucket.PrivateBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `disallowPublicAccess`<sup>Optional</sup> <a name="disallowPublicAccess" id="@pepperize/cdk-private-bucket.PrivateBucket.property.disallowPublicAccess"></a>

```typescript
public readonly disallowPublicAccess: boolean;
```

- *Type:* boolean

Whether to disallow public access.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@pepperize/cdk-private-bucket.PrivateBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `replicationRoleArn`<sup>Optional</sup> <a name="replicationRoleArn" id="@pepperize/cdk-private-bucket.PrivateBucket.property.replicationRoleArn"></a>

```typescript
public readonly replicationRoleArn: string;
```

- *Type:* string

Role used to set up permissions on this bucket for replication.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucket.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@pepperize/cdk-private-bucket.PrivateBucket.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateBucketProps <a name="PrivateBucketProps" id="@pepperize/cdk-private-bucket.PrivateBucketProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-private-bucket.PrivateBucketProps.Initializer"></a>

```typescript
import { PrivateBucketProps } from '@pepperize/cdk-private-bucket'

const privateBucketProps: PrivateBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.abacStatus">abacStatus</a></code> | <code>boolean</code> | Enables Amazon S3 to evaluate the ABAC policy in the request. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.blockedEncryptionTypes">blockedEncryptionTypes</a></code> | <code>aws-cdk-lib.aws_s3.BlockedEncryptionType[]</code> | Encryption types that should be blocked for this bucket. Use `NONE` to allow all encryption types. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketNamePrefix">bucketNamePrefix</a></code> | <code>string</code> | A prefix for the bucket name in the account-regional namespace. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketNamespace">bucketNamespace</a></code> | <code>aws-cdk-lib.aws_s3.BucketNamespace</code> | The namespace for the bucket name. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Intelligent Tiering Configurations. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.minimumTLSVersion">minimumTLSVersion</a></code> | <code>number</code> | Enforces minimum TLS version for requests. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.notificationsSkipDestinationValidation">notificationsSkipDestinationValidation</a></code> | <code>boolean</code> | Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.replicationRole">replicationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the replication. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.replicationRules">replicationRules</a></code> | <code>aws-cdk-lib.aws_s3.ReplicationRule[]</code> | A container for one or more replication rules. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code>aws-cdk-lib.aws_s3.TargetObjectKeyFormat</code> | Optional key format for log objects. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.transitionDefaultMinimumObjectSize">transitionDefaultMinimumObjectSize</a></code> | <code>aws-cdk-lib.aws_s3.TransitionDefaultMinimumObjectSize</code> | Indicates which default minimum object size behavior is applied to the lifecycle configuration. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `abacStatus`<sup>Optional</sup> <a name="abacStatus" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.abacStatus"></a>

```typescript
public readonly abacStatus: boolean;
```

- *Type:* boolean
- *Default:* The ABAC status is not set

Enables Amazon S3 to evaluate the ABAC policy in the request.

Set to true to enable ABAC, false to explicitly disable it.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-abacstatus](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-abacstatus)

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

Setting `autoDeleteObjects` to true on a bucket will add `s3:PutBucketPolicy` to the
bucket policy. This is because during bucket deletion, the custom resource provider
needs to update the bucket policy by adding a deny policy for `s3:PutObject` to
prevent race conditions with external bucket writers.

---

##### `blockedEncryptionTypes`<sup>Optional</sup> <a name="blockedEncryptionTypes" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.blockedEncryptionTypes"></a>

```typescript
public readonly blockedEncryptionTypes: BlockedEncryptionType[];
```

- *Type:* aws-cdk-lib.aws_s3.BlockedEncryptionType[]
- *Default:* Amazon S3 determines which encryption types to block.

Encryption types that should be blocked for this bucket. Use `NONE` to allow all encryption types.

At least one `BlockedEncryptionType` must be given. If `NONE` is given, it must be
the only `BlockedEncryptionType` in the list.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys.

Only relevant when using KMS for encryption.

- If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is not set to `BucketEncryption.UNENCRYPTED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

Cannot be used together with `bucketNamePrefix` or `bucketNamespace`.

---

##### `bucketNamePrefix`<sup>Optional</sup> <a name="bucketNamePrefix" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketNamePrefix"></a>

```typescript
public readonly bucketNamePrefix: string;
```

- *Type:* string
- *Default:* No prefix.

A prefix for the bucket name in the account-regional namespace.

Requires `bucketNamespace` to be set to `ACCOUNT_REGIONAL`.
Cannot be used together with `bucketName`.

CloudFormation appends `-<accountId>-<region>-an` to form the full name.
For example, `my-app` becomes `my-app-123456789012-us-east-1-an`.

Must contain only lowercase letters, numbers, and hyphens.
Must start and end with a lowercase letter or number.

---

##### `bucketNamespace`<sup>Optional</sup> <a name="bucketNamespace" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.bucketNamespace"></a>

```typescript
public readonly bucketNamespace: BucketNamespace;
```

- *Type:* aws-cdk-lib.aws_s3.BucketNamespace
- *Default:* Global namespace.

The namespace for the bucket name.

AWS recommends `ACCOUNT_REGIONAL` for improved security, as bucket names
are scoped to your account and cannot be claimed by other accounts.
When set to `ACCOUNT_REGIONAL`, `bucketNamePrefix` is required.
When set to `GLOBAL`, it can be used standalone to explicitly specify the default namespace.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html)

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `KMS` if `encryptionKey` is specified, or `S3_MANAGED` otherwise.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiering Configurations.

Intelligent Tiering Configurations.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `minimumTLSVersion`<sup>Optional</sup> <a name="minimumTLSVersion" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.minimumTLSVersion"></a>

```typescript
public readonly minimumTLSVersion: number;
```

- *Type:* number
- *Default:* No minimum TLS version is enforced.

Enforces minimum TLS version for requests.

Requires `enforceSSL` to be enabled.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version)

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `notificationsSkipDestinationValidation`<sup>Optional</sup> <a name="notificationsSkipDestinationValidation" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.notificationsSkipDestinationValidation"></a>

```typescript
public readonly notificationsSkipDestinationValidation: boolean;
```

- *Type:* boolean
- *Default:* false

Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration. By default, Amazon S3 sets Object Ownership to `Bucket owner enforced`. This means ACLs are disabled and the bucket owner will own every object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `replicationRole`<sup>Optional</sup> <a name="replicationRole" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.replicationRole"></a>

```typescript
public readonly replicationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the replication.

When setting this property, you must also set `replicationRules`.

---

##### `replicationRules`<sup>Optional</sup> <a name="replicationRules" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.replicationRules"></a>

```typescript
public readonly replicationRules: ReplicationRule[];
```

- *Type:* aws-cdk-lib.aws_s3.ReplicationRule[]
- *Default:* No replication

A container for one or more replication rules.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: TargetObjectKeyFormat;
```

- *Type:* aws-cdk-lib.aws_s3.TargetObjectKeyFormat
- *Default:* the default key format is: [DestinationPrefix][YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]

Optional key format for log objects.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `transitionDefaultMinimumObjectSize`<sup>Optional</sup> <a name="transitionDefaultMinimumObjectSize" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.transitionDefaultMinimumObjectSize"></a>

```typescript
public readonly transitionDefaultMinimumObjectSize: TransitionDefaultMinimumObjectSize;
```

- *Type:* aws-cdk-lib.aws_s3.TransitionDefaultMinimumObjectSize
- *Default:* TransitionDefaultMinimumObjectSize.VARIES_BY_STORAGE_CLASS before September 2024, otherwise TransitionDefaultMinimumObjectSize.ALL_STORAGE_CLASSES_128_K.

Indicates which default minimum object size behavior is applied to the lifecycle configuration.

To customize the minimum object size for any transition you can add a filter that specifies a custom
`objectSizeGreaterThan` or `objectSizeLessThan` for `lifecycleRules` property. Custom filters always
take precedence over the default transition behavior.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@pepperize/cdk-private-bucket.PrivateBucketProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---

## Classes <a name="Classes" id="Classes"></a>

### BucketPrivacy <a name="BucketPrivacy" id="@pepperize/cdk-private-bucket.BucketPrivacy"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@pepperize/cdk-private-bucket.BucketPrivacy.Initializer"></a>

```typescript
import { BucketPrivacy } from '@pepperize/cdk-private-bucket'

new BucketPrivacy()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-private-bucket.BucketPrivacy.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@pepperize/cdk-private-bucket.BucketPrivacy.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-private-bucket.BucketPrivacy.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---





