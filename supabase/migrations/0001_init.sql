create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  avatar_url text,
  username text unique not null,
  bio text,
  location text,
  rating numeric default 0,
  wallet_ton text,
  created_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  images text[] default '{}',
  bounty integer default 0,
  status text default 'open',
  author_id uuid references users(id),
  tags text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists solves (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id),
  user_id uuid references users(id),
  content text not null,
  upvotes integer default 0,
  created_at timestamptz default now()
);

create table if not exists chats (
  id uuid primary key default uuid_generate_v4(),
  type text not null,
  name text,
  members uuid[] default '{}',
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default uuid_generate_v4(),
  chat_id uuid references chats(id),
  user_id uuid references users(id),
  content text not null,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  type text not null,
  related_id uuid,
  read boolean default false,
  created_at timestamptz default now()
);
