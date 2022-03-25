import * as cdk from 'aws-cdk-lib'
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as sqs from "aws-cdk-lib/aws-sqs"
import * as sns_subscriptions from "aws-cdk-lib/aws-sns-subscriptions"
import {Construct} from "constructs"

import {StackWithTopic} from "./stack-with-topic"

export class StackWithFunction extends cdk.Stack {

  constructor(scope: Construct, id: string, stackWithQueue: StackWithTopic, props?: cdk.StackProps) {
    super(scope, id, props)

    const queue = new sqs.Queue(this, 'the-queue')
    stackWithQueue.topic.addSubscription(new sns_subscriptions.SqsSubscription(queue))

    const function1 = new lambda.Function(this,'the-function',{
      code: lambda.Code.fromInline("console.log('hi')"),
      handler: 'index',
      runtime:lambda.Runtime.NODEJS_12_X,
      environment:{
        TOPIC_ARN: stackWithQueue.topic.topicArn
      }
    })

    stackWithQueue.bucket.grantWrite(function1)
  }
}
