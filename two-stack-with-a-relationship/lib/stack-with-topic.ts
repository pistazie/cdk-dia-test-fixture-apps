import * as cdk from 'aws-cdk-lib'
import * as sns from "aws-cdk-lib/aws-sns"
import {Construct} from "constructs"

export class StackWithTopic extends cdk.Stack {

  topic: sns.Topic

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.topic = new sns.Topic(this,'the-topic')
  }
}
