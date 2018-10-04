$LOAD_PATH.unshift(File.dirname(__FILE__))
require "grpc"
require "hiyoco/calendar_watcher/service_services_pb"

class FilterServer < Hiyoco::CalendarWatcher::Filter::Service
  def say_event(e, _unused_call)
    start_time = Time.at(e.start.dateTime.dateTime.seconds).getlocal("+09:00")
    end_time = Time.at(e.end.dateTime.dateTime.seconds).getlocal("+09:00")
    puts "[\{\"start\":\"#{start_time.strftime("%Y-%m-%dT%H:%M%:z")}\",\"end\":\"#{end_time.strftime("%Y-%m-%dT%H:%M%:z")}\",\"summary\":\"#{e.summary}\",\"description\":\"#{e.description}\"\}]"
    STDOUT.flush
    Hiyoco::Calendar::Result.new(result: true)
  end
end

# main starts an RpcServer that receives requests to GreeterServer at the sample
# server port.
def main
  s = GRPC::RpcServer.new
  s.add_http2_port('0.0.0.0:50051', :this_port_is_insecure)
  s.handle(FilterServer)
  s.run_till_terminated
end

main
