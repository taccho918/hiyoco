#!/bin/sh

SH_PATH=$(dirname $0)

bundle exec grpc_tools_ruby_protoc -I ../../proto/ --ruby_out=lib/proto --grpc_out=lib/proto ../../proto/hiyoco/calendar/event.proto
bundle exec grpc_tools_ruby_protoc -I ../../proto/ --ruby_out=lib/proto --grpc_out=lib/proto ../../proto/hiyoco/filter/service.proto
