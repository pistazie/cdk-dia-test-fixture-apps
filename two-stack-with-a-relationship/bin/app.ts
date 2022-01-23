#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StackWithTopic } from '../lib/stack-with-topic';
import {StackWithFunction} from "../lib/stack-with-function"

const app = new cdk.App();

const stackWithQueue = new StackWithTopic(app, 'stack-with-topic',{})
new StackWithFunction(app, 'stack-with-function', stackWithQueue)

