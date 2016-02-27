#!/usr/bin/env node

require('babel/register')({
  only: ['gatsby/lib'],
})
require('./new')
