// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HomePage, Bio, VendingContent, RestaurantLocation, Restaurant, IntranetContent, IntranetResource, IntranetCategory, NewsEvent, Carousel, W2, Catering, Staff } = initSchema(schema);

export {
  HomePage,
  Bio,
  VendingContent,
  RestaurantLocation,
  Restaurant,
  IntranetContent,
  IntranetResource,
  IntranetCategory,
  NewsEvent,
  Carousel,
  W2,
  Catering,
  Staff
};