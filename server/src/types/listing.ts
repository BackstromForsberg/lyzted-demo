export type UpdateListingParams = {
    id: string;
};

export type UpdateListingBody = {
    price_per_seat: number;
};


export type Listing = {
    id: number
    event_name: string
    venue_name: string
    event_date: string
    section: string
    num_seats: number
    price_per_seat: number
}