# coding: utf-8
this_dir = File.expand_path(File.dirname(__FILE__))
lib_dir = File.join(this_dir, '../proto')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

require 'grpc'
require "hiyoco/calendar/event_pb"
require "hiyoco/filter/service_pb"
require "hiyoco/filter/service_services_pb"
require "google/protobuf/well_known_types"

def create_date(time)
  gtime = Google::Protobuf::Timestamp.new
  gtime.from_time(time)
  d = Hiyoco::Calendar::Date.new(date: gtime)
  date_or_time = Hiyoco::Calendar::DateOrTime.new
  date_or_time.date = d
  return date_or_time
end

def main
  start_time = Time.new(2018, 8, 6, 13, 30, 0, "+09:00")
  end_time = Time.new(2018, 8, 6, 15, 30, 0, "+09:00")
  summary = "第160回GN談話会"
  description = ""

  stub = Hiyoco::Filter::Filter::Stub.new('0.0.0.0:50050', :this_channel_is_insecure)
  ev = Hiyoco::Calendar::Event.new(start: create_date(start_time), end: create_date(end_time), summary: summary, description: description)
  message = stub.say_event(ev).result
  puts message
end

main
