#!/usr/bin/env node
const aws = require('aws-sdk');
const moment = require('moment');
const callerReference = moment().format('YYYYMMDDHHmmss');

aws.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const paths = [
  '/**/*',
  '/*',
  '/index.html'
];

const cloudfront = new aws.CloudFront();
cloudfront.createInvalidation({
  DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
  InvalidationBatch: {
    CallerReference: callerReference,
    Paths: {
      Quantity: paths.length,
      Items: paths
    }
  }
}, function(err, invalidation) {
  console.log('err', err);
  console.log(JSON.stringify(invalidation, null, 2));
  process.exit(err ? 1 : 0);
});
