import React, { useState, useEffect } from "react";
import { List } from "../components/List";

import img_1 from "../image/1.jpg";
import img_2 from "../image/2.jpg";
import img_3 from "../image/3.jpg";

const Page = () => {
    // State to store the filtered data
    const [filteredList, setFilteredList] = useState(List);
    const [img, setImg] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(filteredList.length);
    }, [filteredList]);

    // Filter functions
    const neww = () => {
        setFilteredList(List.filter((item) => item.winner === 0));
        setImg(0);
        setQuantity(0);
    };

    const an = () => {
        setFilteredList(List.filter((item) => item.winner === 1));
        setImg(1);
        setQuantity(filteredList.length);
    };

    const dima = () => {
        setFilteredList(List.filter((item) => item.winner === 2));
        setImg(2);

        setQuantity(filteredList.length);
    };

    const roma = () => {
        setFilteredList(List.filter((item) => item.winner === 3));
        setImg(3);

        setQuantity(filteredList.length);
    };

    const old = () => {
        setFilteredList(List.filter((item) => item.winner !== 0));
        setImg(4);
    };

    return (
        <div
            style={{ minHeight: "100vh" }}
            className="m-0 p-0 bg-dark text-white"
        >
            {/* Filter Buttons */}
            <div className="m-0 p-0 pb-2 row justify-content-evenly position-sticky">
                <button
                    onClick={neww}
                    className={`m-0 p-2 col bg-primary text-white fw-bold border border-dark border-2 ${
                        img === 0 ? "border-white" : ""
                    }`}
                >
                    +
                </button>
                <button
                    onClick={an}
                    className={`m-0 p-2 col bg-primary text-white fw-bold border border-dark border-2 ${
                        img === 1 ? "border-white" : ""
                    }`}
                >
                    Андріан
                </button>
                <button
                    onClick={dima}
                    className={`m-0 p-2 col bg-primary text-white fw-bold border border-dark border-2 ${
                        img === 2 ? "border-white" : ""
                    }`}
                >
                    Дмитрик
                </button>
                <button
                    onClick={roma}
                    className={`m-0 p-2 col bg-primary text-white fw-bold border border-dark border-2 ${
                        img === 3 ? "border-white" : ""
                    }`}
                >
                    Ромчик
                </button>
                <button
                    onClick={old}
                    className={`m-0 p-2 col bg-primary text-white fw-bold border border-dark border-2 ${
                        img === 4 ? "border-white" : ""
                    }`}
                >
                    -
                </button>
            </div>

            {img !== 0 &&
                img !== 4 && ( // Only render the img tag if img is not 0 and not 4
                    <div className="m-0 p-3 row justify-content-center align-items-center position-relative">
                        <img
                            src={
                                img === 1
                                    ? img_1
                                    : img === 2
                                    ? img_2
                                    : img === 3
                                    ? img_3
                                    : "" // Default to an empty string if img doesn't match
                            }
                            alt="Dynamic Content"
                            style={{
                                objectFit: "cover",
                            }}
                            className="m-0 p-0 col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2 border border-2 border-primary rounded-circle"
                        />

                        <div
                            style={{
                                position: "absolute",
                                bottom: "-20px",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                            className="m-0 p-2 fw-bold col-auto position-absolute rounded-pill text-white bg-primary d-flex justify-content-center align-items-center "
                        >
                            {quantity}
                        </div>

                        {/* <div className="m-0 p-3 col-12 fs-1 fw-bold text-center">Aндріан</div> */}
                    </div>
                )}

            {/* Display Filtered List */}
            <div className="m-0 p-2 d-flex flex-column justify-content-center align-items-center">
                {[...filteredList].reverse().map((item) => (
                        <div
                            key={item.id}
                            className="m-2  p-3 col-auto border border-primary border-2 "
                        >
                            {" "}
                            <div className="m-0 p-0 ">
                                {item.id}. {item.dispute}
                            </div>
                            <div className="m-0 p-0 fs-5 fw-bold text-center">
                                {item.winner === 1 && "Андріан -"}
                                {item.winner === 2 && "Дмитрик -"}
                                {item.winner === 3 && "Ромчик -"} {item.rank}
                            </div>
                            {item.detail !== 0 && (
                                <div
                                    style={{ fontStyle: "italic" }}
                                    className="m-0 mt-1 p-0"
                                >
                                    {item.detail}
                                </div>
                            )}
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
