const Link = artifacts.require("Link");
// const Dex = artifacts.require("Dex");

module.exports = async function (deployer, network, accounts) {
	await deployer.deploy(Link);
	// let dex = await Dex.deployed();
	// let link = await Link.deployed();
	// await link.approve(dex.address, "500");
	// await dex.addToken(web3.utils.fromUtf8(link.symbol()), link.address);
	// await dex.deposit(100, web3.utils.fromUtf8(link.symbol()));
	// let balanceOfLink = await dex.balances(
	// 	accounts[0],
	// 	web3.utils.fromUtf8(link.symbol())
	// );
	// console.log(balanceOfLink);
};