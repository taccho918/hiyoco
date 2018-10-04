# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "filter/version"

Gem::Specification.new do |spec|
  spec.name          = "filter"
  spec.version       = Filter::VERSION
  spec.authors       = ["Nomura Laboratory, Eiji Yamamoto, Yoshinari Nonura"]
  spec.email         = ["nomura.laboratory@gmail.com"]

  spec.summary       = %q{TODO: Edit event received with gRPC, and send event by gRPC．}
  spec.description   = %q{TODO: Edit event received with gRPC, and send event by gRPC．}
  spec.homepage      = "https://github.com/nomlab/hiyoco"
  spec.license       = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # NOTE: "google-protobuf" gem would be installed as a dependency of "grpc" gem.
  spec.add_runtime_dependency "grpc"
  spec.add_runtime_dependency "google-protobuf"

  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "grpc-tools"
end
