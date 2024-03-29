import React from "react";
import OnBoard from "./OnBoard";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { numberWithCommas } from "../../helpers";

export default function GuestList({
	onGuestListClick,
	availableGuestListNFT,
	totalSupplyGuestListNFT,
	buyGuestlistNFTState,
}) {
	const [sliderValue, setSliderValue] = React.useState(500);
	const handleChange = (event, newValue) => {
		setSliderValue(newValue);
	};
	return (
		<div className="mint-container">
			<div className="div-ticket blue-bg-border">
				<h4 className="h4-desktop no-margin">limited to 100:</h4>
				<h1 className="h1-desktop no-margin">Guestlist Ticket</h1>
				<h2 className="h2-desktop no-margin blue">Receive 30% boost</h2>
				<div className="rounded blue-border">
					<h1 className="h1-desktop no-margin">
						min <span className="dollar-sign">$</span> 500
					</h1>
					<h4 className="h4-desktop no-margin">payable in DAI stablecoin</h4>
				</div>
			</div>
			<ul>
				<li className="li-desktop">
					You are among our earliest supporters and we will reward you with a 30% boost on top of your contribution
				</li>
				<li className="li-desktop">Receive a unique Web3 Raver NFT</li>
				<li className="li-desktop">Access to the OG Lounge</li>
				<li className="li-desktop">Access to all other private lounges</li>
				<li className="li-desktop">A nice boost to your gamification supplies</li>
			</ul>
			{buyGuestlistNFTState.status === "Success" && <OnBoard />}
			<Stack
				spacing={1}
				mb={2}
				p={"8px 24px"}
				style={{ textAlign: "center", border: "3px #61aeda solid", borderRadius: "8px" }}
			>
				<Typography style={{ fontFamily: "Montserrat" }}>How much do you want to contribute?</Typography>
				<Slider
					aria-label="GuestList Ticket"
					value={sliderValue}
					onChange={handleChange}
					step={100}
					size="small"
					min={500}
					max={40000}
					sx={{
						"& .MuiSlider-thumb": {
							color: "#61aeda",
						},
						"&": {
							color: "white",
						},
					}}
				/>
				<Typography style={{ textAlign: "center", fontFamily: "Montserrat" }}>
					{numberWithCommas(sliderValue)} DAI
				</Typography>
			</Stack>
			{totalSupplyGuestListNFT !== 0 && (
				<>
					{availableGuestListNFT !== totalSupplyGuestListNFT ? (
						<button className="btn-mint btn-style-blue-solid zoom" onClick={() => onGuestListClick(sliderValue)}>
							{buyGuestlistNFTState.status === "Success" ? "Buy another" : "Buy"}
						</button>
					) : (
						<button className="btn-mint btn-mint-soldout zoom">
							<div>Sold Out</div>
							<span>
								Follow us on{" "}
								<a href="https://twitter.com/LifeLiveDAO" target="_blank" rel="noreferrer">
									Twitter
								</a>{" "}
								and join our{" "}
								<a href="https://t.me/lifelivedao" target="_blank" rel="noreferrer">
									Telegram
								</a>{" "}
								to learn about the next drop
							</span>{" "}
						</button>
					)}
					<p>
						{availableGuestListNFT}/{totalSupplyGuestListNFT} sold
					</p>
				</>
			)}
		</div>
	);
}
