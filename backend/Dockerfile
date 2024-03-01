# syntax=docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.2.2
FROM ruby:$RUBY_VERSION-slim as base

# Rails app lives here
WORKDIR /rails

# Set environment variables
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development:test" \
    DATABASE_USERNAME="adminmr" \
    DATABASE_PASSWORD="Trabajo2018!" \
    DATABASE_HOST="db" \
    DATABASE_PORT="5432"

# Note: Replace "your_secure_password" with your actual database password.
# In production, prefer using a secrets management approach instead of hard-coding in Dockerfile.

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build gems and for runtime
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libpq-dev libvips pkg-config

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git

# Copy application code
COPY . .

# Precompile assets and bootsnap cache (remove if not using bootsnap)
RUN bundle exec rails assets:precompile && \
    bundle exec bootsnap precompile --gemfile

# Final stage for app image
FROM base

# Install runtime packages
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libvips postgresql-client && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

# Copy built artifacts: gems, application
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

# Create a non-root user and set permissions
RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails /rails

# Set user to use when running the image
USER rails:rails

# Define the entrypoint script
COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

# Expose port 3000 and start the Rails server
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
