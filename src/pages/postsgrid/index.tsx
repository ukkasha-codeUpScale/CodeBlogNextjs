import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function PostsGrid({ data }: any) {

  const filteredItems = data?.blogs;

  return (
    <Container>
      <Row>
        {filteredItems?.slice(0, 3)?.map((i: any) => {
          return (
            <Col className="transform transition duration-200 hover:scale-105" key={i.id}>
              
              <div className="max-w-sm rounded overflow-hidden shadow-md">
              <Link href={`./postsgrid/${i.id}`} >

                <img
                  className="w-full"
                  src={i?.photo_url}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {i.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {i.content_text.slice(0,140)}.....
                  </p>
                </div>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>

      <Row className="mt-5">
        {filteredItems?.slice(6, 9)?.map((i: any) => {
          return (
            <Col className="transform transition duration-200 hover:scale-105" key={i.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-md">
                <img
                  className="w-full"
                  src={i?.photo_url}
                  alt="an image of item"
                />
                <Link href={`./postsgrid/${i.id}`}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {i.title}
                  </div>
                  <p className="text-gray-700 text-base">
                   {i.content_text.slice(0,140)}....
                  </p>
                </div>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>   
      <div  className="flex items-stretch border">
      <Link
        className="m-50 justify-self-end "
              href={'/postsgrid/viewallpost'}
            >


              
              <button className="btn draw-border ">View All</button>
          
            </Link> 


      </div>
    </Container>
  );
}
