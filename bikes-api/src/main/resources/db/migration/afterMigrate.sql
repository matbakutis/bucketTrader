INSERT INTO users
	(username, name)
VALUES
	('fakeUsername1', 'fake name1'),
	('fakeUsername2', 'fake name2'),
	('fakeUsername3', 'fake name3'),
	('fakeUsername4', 'fake name4');

INSERT INTO cars
	(make, model, miles, description, picture_urls, owner, price)
VALUES
	('fakeCarMake1', 'fakeModel1', 123, 'this is car description 1' , '{"pictureURL1.1", "pictureURL1.2", "pictureURL1.3"}', 'fakeUsername1', 1234.56),
	('fakeCarMake2', 'fakeModel2', 1234, 'this is car description 2' , '{"pictureURL2.1", "pictureURL2.2", "pictureURL2.3"}', 'fakeUsername2', 2222.22),
	('fakeCarMake3', 'fakeModel3', 12345, 'this is car description 3' , '{"pictureURL3.1", "pictureURL3.2", "pictureURL3.3"}', 'fakeUsername3', 3333.33),
	('fakeCarMake4', 'fakeModel4', 132456, 'this is car description 4' , '{"pictureURL4.1", "pictureURL4.2", "pictureURL4.3"}', 'fakeUsername4', 4444.44);

INSERT INTO bikes
	(make, model, miles, description, picture_urls, owner, price)
VALUES
	('fakeBikeMake1', 'fakeModel1', 123, 'this is car description 1' , '{"pictureURL1.1", "pictureURL1.2", "pictureURL1.3"}', 'fakeUsername1', 5555.55),
	('fakeBikeMake2', 'fakeModel2', 1234, 'this is car description 2' , '{"pictureURL2.1", "pictureURL2.2", "pictureURL2.3"}', 'fakeUsername2', 6666.66),
	('fakeBikeMake3', 'fakeModel3', 12345, 'this is car description 3' , '{"pictureURL3.1", "pictureURL3.2", "pictureURL3.3"}', 'fakeUsername3', 7777.77),
	('fakeBikeMake4', 'fakeModel4', 132456, 'this is car description 4' , '{"pictureURL4.1", "pictureURL4.2", "pictureURL4.3"}', 'fakeUsername4', 8888.88);
