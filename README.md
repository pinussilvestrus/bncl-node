# bncl-node
Node Module for the [bpmn natural creation language](https://github.com/pinussilvestrus/bncl)

![Travis Status](https://travis-ci.org/pinussilvestrus/bncl-node.svg?branch=master)

# Requirements

* node.js

## Setup

1. Go into your project folder and enter `npm install --save bncl-node`

## Usage

```js
const Bncl  = require('../lib');

// given a valid bncl statement
var bnclString = "lets create a process with a startevent signed s1 with a endevent signed e1 with a sequenceflow comesfrom s1 goesto e1";

// use this to convert bncl to bpmn
return Bncl.parseBncl(bnclString).then(res => {
      console.log(res);
    });
```

output:


```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<definitions id="definitions_4e502235-2722-44ac-bf4a-01422aa82ca2" targetNamespace="http://camunda.org/examples" xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">
  <process id="pid-8565d232-4eae-450a-83cb-c5ac4659059b">
    <startEvent id="s1">
      <outgoing>s1-e1</outgoing>
    </startEvent>
    <endEvent id="e1">
      <incoming>s1-e1</incoming>
    </endEvent>
    <sequenceFlow id="s1-e1" sourceRef="s1" targetRef="e1"/>
  </process>
</definitions>
``` 

## Testing

### Run tests

1. Go into project folder
2. run `npm test`

