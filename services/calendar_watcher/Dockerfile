FROM ruby:2.5.1

RUN mkdir -p $HOME/.config/calendar_watcher

COPY lib/ ./lib/
COPY calendar_watcher.gemspec ./	
COPY Gemfile Gemfile.lock ./
RUN bundle install --path=vendor/bundle --binstubs=bin

COPY exe/ ./exe/

CMD [ "bundle", "exec", "exe/calendar_watcher", "help" ]
