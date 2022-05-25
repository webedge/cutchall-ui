import { DataStore, SortDirection, Predicates } from "@aws-amplify/datastore";
import isAfter from 'date-fns/isAfter';
import addDays from 'date-fns/addDays'
import { Carousel, Catering, Staff, NewsEvent, Restaurant, RestaurantLocation, W2, IntranetContent, Bio, IntranetCategory, IntranetResource, VendingContent } from "../models";

function sort(array, property) {
    return array.sort((a, b) => a[property] - b[property])
}

export async function getAllCarousel() {
    const rawSlides = await DataStore.query(Carousel, Predicates.ALL, {
        sort: (s) => s.order(SortDirection.ASCENDING),
    });
    const slidesInOrder = rawSlides.filter(x => x.active);
    return slidesInOrder.filter(x => isAfter(addDays(new Date(), 1), new Date(x.startDate)));
}

export async function getAllStaff() {
    const staff = await DataStore.query(Staff, Predicates.ALL, {
        sort: (s) => s.lastName(SortDirection.ASCENDING),
    });
    const staffWithOrder = staff.filter(x => x.order);
    const staffWithoutOrder = staff.filter(x => !x.order);
    return [...sort(staffWithOrder, 'order'), ...staffWithoutOrder];
}

export async function getAllCatering() {
    return await DataStore.query(Catering, Predicates.ALL, {
        sort: (s) => s.name(SortDirection.ASCENDING),
    });
}

export async function getAllNews() {
    const results = await DataStore.query(NewsEvent, Predicates.ALL, {
        sort: (s) => s.date(SortDirection.DESCENDING),
    });
    const test = results.map(x => {
        const month = x.date.substring(7, 5);
        const day = x.date.substring(10, 8)
        return {
            ...x,
            month,
            day,
        }
    });
    return test;
}

export async function getAllRestaurants() {
    return await DataStore.query(Restaurant, Predicates.ALL, {
        sort: (s) => s.name(SortDirection.ASCENDING),
    });
}

export async function getRestaurantByRestaurantId(restaurantId) {
    const restaurants = await DataStore.query(Restaurant, Predicates.ALL, {
        sort: (s) => s.name(SortDirection.ASCENDING),
    });
    return restaurants.find(x => x.id === restaurantId);
}

export async function getLocationsByRestaurantId(restaurantId) {
    const locations = await DataStore.query(RestaurantLocation, Predicates.ALL);
    return locations.filter(x => x.Restaurants?.id === restaurantId);
}

export async function getAllW2() {
    return await DataStore.query(W2, Predicates.ALL);
}

export async function getIntranetContent() {
    const model = await DataStore.query(IntranetContent);
    return model[0];
}

export async function getVendingContent() {
    const model = await DataStore.query(VendingContent);
    return model[0];
}

export async function getBioContent() {
    const model = await DataStore.query(Bio);
    return model[0];
}

export async function getIntranetCategories() {
    const categories = await DataStore.query(IntranetCategory);
    let mappedCategories = categories.map(x => ({ ...x, resources: [] }))

    const resources = await DataStore.query(IntranetResource);
    resources?.forEach(resource => {
        let foundCategoryIndex = mappedCategories.findIndex(category => category?.name === resource?.IntranetCategory?.name);
        if (foundCategoryIndex > -1) {
            mappedCategories[foundCategoryIndex] = {
                ...mappedCategories[foundCategoryIndex],
                resources: [...mappedCategories[foundCategoryIndex]?.resources, { ...resource }]
            }
        }
    });
    return mappedCategories;
}
