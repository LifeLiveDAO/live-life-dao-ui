import React from "react";
import { Link } from "react-router-dom";
import { Header } from ".";
import { Link as ScrollLink } from "react-scroll";

export default function Intro() {
	return (
		<Header>
			<div className="intro-container">
				<div className="title">LifeLive DAO</div>
				<h2>The nightlife metaverse</h2>
				<p className="text">
					Access virtual and hybrid events and Dance2Earn with people from all over the world.
				</p>
				<div className="btn-main-container">
					<ScrollLink to="mint" spy={true} smooth={true} duration={900}>
						<button className="btn btn-style-blue-solid zoom">Buy Investor NFTs</button>
					</ScrollLink>
					<a className="link" href="https://drive.google.com/file/d/1xs-bvwmNUumlscIphOXIIbnsazDGbNrw/view" target="_blank">
						<button className="btn btn-style-blue-light btn-margin zoom">Download litepaper</button>
					</a>
				</div>
			</div>
		</Header>
	);
}