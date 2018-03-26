INSERT INTO users
	(username, name)
VALUES
	('fakeUsername1', 'fake name1'),
	('fakeUsername2', 'fake name2'),
	('fakeUsername3', 'fake name3'),
	('fakeUsername4', 'fake name4');

INSERT INTO cars
	(make, model, miles, picture_urls, owner)
VALUES
	('fakeCarMake1', 'fakeModel1', 123, {'pictureURL1.1', 'pictureURL1.2', 'pictureURL1.3'}, 'fakeUsername1'),
	('fakeCarMake2', 'fakeModel2', 1234, {'pictureURL2.1', 'pictureURL2.2', 'pictureURL2.3'}, 'fakeUsername2'),
	('fakeCarMake3', 'fakeModel3', 12345, {'pictureURL3.1', 'pictureURL3.2', 'pictureURL3.3'}, 'fakeUsername3'),
	('fakeCarMake4', 'fakeModel4', 132456, {'pictureURL4.1', 'pictureURL4.2', 'pictureURL4.3'}, 'fakeUsername4');

INSERT INTO bikes
	(make, model, miles, picture_urls, owner)
VALUES
	('fakeBikeMake1', 'fakeModel1', 123, {'pictureURL1.1', 'pictureURL1.2', 'pictureURL1.3'}, 'fakeUsername1'),
	('fakeBikeMake2', 'fakeModel2', 1234, {'pictureURL2.1', 'pictureURL2.2', 'pictureURL2.3'}, 'fakeUsername2'),
	('fakeBikeMake3', 'fakeModel3', 12345, {'pictureURL3.1', 'pictureURL3.2', 'pictureURL3.3'}, 'fakeUsername3'),
	('fakeBikeMake4', 'fakeModel4', 132456, {'pictureURL4.1', 'pictureURL4.2', 'pictureURL4.3'}, 'fakeUsername4');