import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HomePageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendingContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantLocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IntranetContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IntranetResourceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IntranetCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarouselMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type W2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CateringMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StaffMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HomePage {
  readonly id: string;
  readonly imageKey?: string | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<HomePage, HomePageMetaData>);
  static copyOf(source: HomePage, mutator: (draft: MutableModel<HomePage, HomePageMetaData>) => MutableModel<HomePage, HomePageMetaData> | void): HomePage;
}

export declare class Bio {
  readonly id: string;
  readonly content?: string | null;
  readonly imageKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bio, BioMetaData>);
  static copyOf(source: Bio, mutator: (draft: MutableModel<Bio, BioMetaData>) => MutableModel<Bio, BioMetaData> | void): Bio;
}

export declare class VendingContent {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VendingContent, VendingContentMetaData>);
  static copyOf(source: VendingContent, mutator: (draft: MutableModel<VendingContent, VendingContentMetaData>) => MutableModel<VendingContent, VendingContentMetaData> | void): VendingContent;
}

export declare class RestaurantLocation {
  readonly id: string;
  readonly Restaurants?: Restaurant | null;
  readonly hours?: string | null;
  readonly shoppingArea?: string | null;
  readonly website?: string | null;
  readonly address1?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly phoneNumber?: string | null;
  readonly googleMapUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RestaurantLocation, RestaurantLocationMetaData>);
  static copyOf(source: RestaurantLocation, mutator: (draft: MutableModel<RestaurantLocation, RestaurantLocationMetaData>) => MutableModel<RestaurantLocation, RestaurantLocationMetaData> | void): RestaurantLocation;
}

export declare class Restaurant {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly logoImageKey?: string | null;
  readonly physicalGiftCardUrl?: string | null;
  readonly egiftCardUrl?: string | null;
  readonly giftCardBalanceUrl?: string | null;
  readonly corporateWebsite?: string | null;
  readonly photoKey?: string | null;
  readonly bannerKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

export declare class IntranetContent {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IntranetContent, IntranetContentMetaData>);
  static copyOf(source: IntranetContent, mutator: (draft: MutableModel<IntranetContent, IntranetContentMetaData>) => MutableModel<IntranetContent, IntranetContentMetaData> | void): IntranetContent;
}

export declare class IntranetResource {
  readonly id: string;
  readonly IntranetCategory?: IntranetCategory | null;
  readonly name?: string | null;
  readonly resourceKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IntranetResource, IntranetResourceMetaData>);
  static copyOf(source: IntranetResource, mutator: (draft: MutableModel<IntranetResource, IntranetResourceMetaData>) => MutableModel<IntranetResource, IntranetResourceMetaData> | void): IntranetResource;
}

export declare class IntranetCategory {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IntranetCategory, IntranetCategoryMetaData>);
  static copyOf(source: IntranetCategory, mutator: (draft: MutableModel<IntranetCategory, IntranetCategoryMetaData>) => MutableModel<IntranetCategory, IntranetCategoryMetaData> | void): IntranetCategory;
}

export declare class NewsEvent {
  readonly id: string;
  readonly title?: string | null;
  readonly date?: string | null;
  readonly previewText?: string | null;
  readonly fullText?: string | null;
  readonly imageKe?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NewsEvent, NewsEventMetaData>);
  static copyOf(source: NewsEvent, mutator: (draft: MutableModel<NewsEvent, NewsEventMetaData>) => MutableModel<NewsEvent, NewsEventMetaData> | void): NewsEvent;
}

export declare class Carousel {
  readonly id: string;
  readonly startDate?: string | null;
  readonly active?: boolean | null;
  readonly caption?: string | null;
  readonly link?: string | null;
  readonly imageKey?: string | null;
  readonly order?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Carousel, CarouselMetaData>);
  static copyOf(source: Carousel, mutator: (draft: MutableModel<Carousel, CarouselMetaData>) => MutableModel<Carousel, CarouselMetaData> | void): Carousel;
}

export declare class W2 {
  readonly id: string;
  readonly imageKey?: string | null;
  readonly pdfKey?: string | null;
  readonly isVisible?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<W2, W2MetaData>);
  static copyOf(source: W2, mutator: (draft: MutableModel<W2, W2MetaData>) => MutableModel<W2, W2MetaData> | void): W2;
}

export declare class Catering {
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly imageKey?: string | null;
  readonly pdfKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Catering, CateringMetaData>);
  static copyOf(source: Catering, mutator: (draft: MutableModel<Catering, CateringMetaData>) => MutableModel<Catering, CateringMetaData> | void): Catering;
}

export declare class Staff {
  readonly id: string;
  readonly order?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly profileImageKey?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Staff, StaffMetaData>);
  static copyOf(source: Staff, mutator: (draft: MutableModel<Staff, StaffMetaData>) => MutableModel<Staff, StaffMetaData> | void): Staff;
}