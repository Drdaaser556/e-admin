import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    title: "Eggs",
    badge: "Grocery",
    image:
      "https://images.unsplash.com/photo-1586802990181-a5771596eaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D",
    count: 4300,
  },
  {
    id: 2,
    title: "Napa",
    badge: "Medicines",
    image:
      "https://images.unsplash.com/photo-1522335579687-9c718c5184d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
    count: 3200,
  },
  {
    id: 3,
    title: "Iphone 14 Pro",
    badge: "Electronics",
    image:
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fElwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    count: 2400,
  },
  {
    id: 4,
    title: "Beef",
    badge: "Grocery",
    image:
      "https://images.unsplash.com/photo-1695683948567-edd8b7ca3a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJlZWZ8ZW58MHx8MHx8fDA%3D",
    count: 1500,
  },
  {
    id: 5,
    title: "Macbook Pro",
    badge: "Elwctronics",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Mutton Purchase",
    badge: "Arif Khan",
    image:
      "https://images.unsplash.com/photo-1717980651515-7796a793002f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXV0dG9ufGVufDB8fDB8fHww",
    count: 1400,
  },
  {
    id: 2,
    title: "Electronics Sale",
    badge: "Sana Ali",
    image:
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fElwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    count: 2100,
  },
  {
    id: 3,
    title: "Fruit Delivery",
    badge: "Sakib Ahmed",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFwcGxlfGVufDB8fDB8fHww",
    count: 1300,
  },
  {
    id: 4,
    title: "Clothing Order",
    badge: "Mim Akter",
    image:
      "https://images.unsplash.com/photo-1517472292914-9570a594783b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGh8ZW58MHx8MHx8fDA%3D",
    count: 2500,
  },
  {
    id: 5,
    title: "Eggs Supply",
    badge: "Rajib Hossain",
    image:
      "https://images.unsplash.com/photo-1586802990181-a5771596eaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Products" ? popularProducts : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
