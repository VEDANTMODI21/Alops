# 🧱 Base image with Ruby
FROM ruby:3.3

# 📍 Set working directory
WORKDIR /app

# 🧰 Install system dependencies
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  curl \
  gnupg \
  nodejs \
  npm \
  libpq-dev \
  sqlite3

# 📦 Install Yarn v1 (compatible with Rails JS bundling)
RUN npm install -g yarn@1.22.19

# 📦 Install correct Bundler version
RUN gem install bundler -v 2.6.9

# 💎 Configure bundler
COPY Gemfile Gemfile.lock ./
RUN bundle config set force_ruby_platform true
RUN bundle install

# 📂 Copy rest of app
COPY . .

# ⚙️ JavaScript dependencies and bundling
RUN yarn install --check-files
RUN bundle exec rails javascript:build

# 🎨 Asset precompilation
RUN bundle exec rake assets:precompile

# 🚪 Open port and run the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]

