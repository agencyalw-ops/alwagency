import { NextResponse } from "next/server";
import { catalogItems } from "@/lib/catalog-data";

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }

  return value;
}

export function GET() {
  const headers = [
    "id",
    "title",
    "description",
    "availability",
    "condition",
    "price",
    "link",
    "image_link",
    "brand",
  ];

  const rows = catalogItems.map((item) =>
    [
      item.id,
      item.title,
      item.description,
      item.availability,
      item.condition,
      item.price,
      item.link,
      item.image_link,
      item.brand,
    ]
      .map(escapeCsv)
      .join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}