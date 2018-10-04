this_dir = File.expand_path(File.dirname(__FILE__))
lib_dir = File.join(this_dir, '../proto')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

require 'grpc'
require "hiyoco/calendar/event_pb"
require "hiyoco/filter/service_pb"
require "hiyoco/filter/service_services_pb"
require "hiyoco/informant/service_services_pb"

class FilterServer < Hiyoco::Filter::Filter::Service
  def say_event(e, _unused_call)
    stub = Hiyoco::Informant::Informant::Stub.new('0.0.0.0:50051', :this_channel_is_insecure)
    start_time = Time.at(e.start.date.date.seconds)
    end_time = Time.at(e.end.date.date.seconds)
    str = "Summary:#{e.summary}\nDescription:#{e.description}\nStart at #{start_time.strftime("%Y-%m-%d %H:%M")}\nEnd at #{end_time.strftime("%Y-%m-%d %H:%M")}\n"
    message = stub.say_event(Hiyoco::Calendar::Text.new(body: str )).result
    puts message
  end
end

def main
  if ARGV[0] == nil then
    host = "localhost"
  else
    host = ARGV[0]
  end
  if ARGV[1] == nil then
    port = 50050
  else
    port = ARGV[1]
  end

  s = GRPC::RpcServer.new
  s.add_http2_port("#{host}:#{port}", :this_port_is_insecure)
  s.handle(FilterServer)
  s.run_till_terminated
end

main
