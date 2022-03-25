import * as cdk from 'aws-cdk-lib'
import * as sns from "aws-cdk-lib/aws-sns"
import * as s3 from "aws-cdk-lib/aws-s3"
import {Construct} from "constructs"

export class StackWithTopic extends cdk.Stack {

  topic: sns.Topic
  bucket: s3.Bucket

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.topic = new sns.Topic(this,'the-topic')
    this.bucket = new s3.Bucket(this,'the-bucket')
  }
}
