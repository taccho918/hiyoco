this_dir = File.expand_path(File.dirname(__FILE__))
lib_dir = File.join(this_dir, '/lib/proto')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

require 'grpc'
require "hiyoco/calendar/event_pb"
require "hiyoco/filter/service_pb"
require "hiyoco/filter/service_services_pb"

host = "localhost"
port = 50051

class FilterServer < Hiyoco::Filter::Filter::Service
  def say_event(e, _unused_call)
    stub = Hiyoco::Filter::Filter::Stub.new('0.0.0.0:50050', :this_channel_is_insecure)
    str = "Summary:#{e.summary}\nDescription:#{e.description}\nStart at #{e.start_time.strftime("%Y-%m-%d %H:%M")}\nEnd at #{e.end_time.strftime("%Y-%m-%d %H:%M")}\n"
    message = stub.say_event(Hiyoco::Calendar::Text.new(body: str )).result
    puts message
  end
end

def main
  s = GRPC::RpcServer.new
  s.add_http2_port('0.0.0.0:50051', :this_port_is_insecure)
  s.handle(FilterServer)
  s.run_till_terminated
end

main
