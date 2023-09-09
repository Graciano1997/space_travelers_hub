const mockresponse = {
  data: [
    {
      id: 1,
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'rocket',
    },
  ],
};

export default {
  get: jest.fn().mockResolvedValue(mockresponse),
};
