insert into users (id, email, avatar_url, username, bio, location, rating, wallet_ton)
values
  ('11111111-1111-1111-1111-111111111111', 'dilshod@co-found.uz', '/avatars/juniper.svg', 'dilshodq', 'Frontend innovator', 'Mirzo Ulug\'bek', 4.9, 'UQC1...'),
  ('22222222-2222-2222-2222-222222222222', 'feruza@co-found.uz', '/avatars/registan.svg', 'feruzak', 'Gastronom maslahatchi', 'Olmazor', 4.8, 'UQC2...'),
  ('33333333-3333-3333-3333-333333333333', 'rustam@co-found.uz', '/avatars/kand.svg', 'rustamb', 'Agritech muhandis', 'Farg\'ona', 4.7, 'UQC3...'),
  ('44444444-4444-4444-4444-444444444444', 'nigora@co-found.uz', '/avatars/atlas.svg', 'nigoraa', 'Product strategist', 'Toshkent', 4.9, 'UQC4...'),
  ('55555555-5555-5555-5555-555555555555', 'siroj@co-found.uz', '/avatars/juniper.svg', 'sirojl', 'Avto ekspert', 'Chilonzor', 4.6, 'UQC5...'),
  ('66666666-6666-6666-6666-666666666666', 'oydin@co-found.uz', '/avatars/registan.svg', 'oydins', 'Kafe boshqaruvchisi', 'Yunusobod', 4.7, 'UQC6...'),
  ('77777777-7777-7777-7777-777777777777', 'farzona@co-found.uz', '/avatars/atlas.svg', 'farzonar', 'Full-stack developer', 'Toshkent', 4.8, 'UQC7...'),
  ('88888888-8888-8888-8888-888888888888', 'jamshid@co-found.uz', '/avatars/kand.svg', 'jamshidb', 'Biznes konsultant', 'Samarqand', 4.5, 'UQC8...'),
  ('99999999-9999-9999-9999-999999999999', 'durdona@co-found.uz', '/avatars/juniper.svg', 'durdonam', 'Data tahlilchi', 'Namangan', 4.6, 'UQC9...'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'shahzod@co-found.uz', '/avatars/registan.svg', 'shahzodt', 'Marketing strategist', 'Toshkent', 4.5, 'UQC10...');

insert into projects (id, title, description, bounty, status, author_id, tags)
values
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Ladani arzon ta\'mirlash ustasi kerak', '1999-yilgi Lada uchun ishonchli motor ustasi izlayapman.', 45000, 'open', '55555555-5555-5555-5555-555555555555', array['#Tashkent', '#Avto', '#Usta']),
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Samarqand plov retseptini kafega moslash', 'Kafe uchun texnologik karta va ta\'mni barqarorlashtirish.', 70000, 'open', '66666666-6666-6666-6666-666666666666', array['#Samarqand', '#Gastronomiya']),
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Farg\'ona fermerlari uchun sug\'orish ilovasi', 'Minimal UI va SMS eslatmalar kerak.', 110000, 'open', '77777777-7777-7777-7777-777777777777', array['#Tech', '#Fargona']),
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Toshkent trafik xaritasi', 'Yo\'l tirbandligi uchun crowdsourced xarita.', 90000, 'open', '44444444-4444-4444-4444-444444444444', array['#Toshkent', '#Transport']),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'Mahalla servis bot', 'Mahalla muammolarini yig\'adigan Telegram bot.', 65000, 'open', '88888888-8888-8888-8888-888888888888', array['#Mahalla', '#Bot']);
