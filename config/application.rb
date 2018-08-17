require_relative 'boot'

require 'rails/all'
require_relative '../app/middlewares/snake_case_parameters'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Facenovel
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.serve_static_assets = true
    config.middleware.use SnakeCaseParameters
  end
end
