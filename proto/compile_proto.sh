#!/usr/bin/env bash

protoc --go_out=../backend/models *.proto
../frontend/node_modules/protobufjs/bin/pbjs -t static-module -w commonjs -o ../frontend/src/app/shared/types/proto-types.js *.proto
../frontend/node_modules/protobufjs/bin/pbts -o ../frontend/src/app/shared/types/proto-types.d.ts ../frontend/src/app/shared/types/proto-types.js
