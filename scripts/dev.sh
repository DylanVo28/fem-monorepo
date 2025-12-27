#!/usr/bin/env bash

pnpm dlx concurrently \
  -n server,models,ui \
  -c blue,magenta,yellow \
  "pnpm --filter @seeds/server dev" \
  "pnpm --filter @seeds/models dev" \
  "pnpm --filter @seeds/ui dev"

