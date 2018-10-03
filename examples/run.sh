#!/bin/bash

./exec_today_events.sh |tee >(./filter_before_15minutes.rb | ./filter_not_out_yet.rb |bundle exec ruby post_event_to_sounder.rb 172.21.50.138 50050) >(./filter_not_out_yet.rb | ./once_day.rb | bundle exec ruby post_event_to_informant.rb localhost 50051)
