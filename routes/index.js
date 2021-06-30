var express = require("express");
var router = express.Router();

var strage = {
	id: 0,
	message: "デフォルトメッセージ",
};

let purchasingList = [
	{
		purchasingId: "A2333333",
		purchasingDate: "2020/03/05",
		purchasingTotalPrice: 23000,
	},
	{
		purchasingId: "A2433333",
		purchasingDate: "2020/03/05",
		purchasingTotalPrice: 23000,
	},
	{
		purchasingId: "A2533333",
		purchasingDate: "2020/03/05",
		purchasingTotalPrice: 4020000,
	},
	{
		purchasingId: "A2633333",
		purchasingDate: "2020/03/05",
		purchasingTotalPrice: 23000,
	},
	{
		purchasingId: "A2333334",
		purchasingDate: "2020/03/05",
		purchasingTotalPrice: 23000,
	},
];

let purchasingDetail = [
	{
		purchasingId: "A124567",
		purchasingTotal: 5,
		totalPrice: 59921,
		purchasingDate: "2020/04/22",
		specifidation: [
			{
				specificationId: "A2333333",
				productName: "カーボンペンC2-W",
				unitPrice: 800,
				total: 12,
				purchasingDate: "2020/03/05",
				totalPrice: 9600,
			},
			{
				specificationId: "A2433333",
				productName: "緩衝材ロール30mm",
				unitPrice: 960,
				total: 3,
				purchasingDate: "2020/03/05",
				totalPrice: 2800,
			},
			{
				specificationId: "A2533333",
				productName: "名刺用紙 平和堂 350-h",
				unitPrice: 1520,
				total: 5,
				purchasingDate: "2020/03/05",
				totalPrice: 4560,
			},
			{
				specificationId: "A2633333",
				productName: "ダンボール クラフトボール紙",
				unitPrice: 1674,
				total: 20,
				purchasingDate: "2020/03/05",
				totalPrice: 3480,
			},
			{
				specificationId: "A2333334",
				productName: "ギフトボックス32個セット",
				unitPrice: 2370,
				total: 4,
				purchasingDate: "2020/03/05",
				totalPrice: 9480,
			},
		],
	},
];

const productList = [
	{
		productId: "A2333333",
		productName: "カーボンペンC2-W",
		productPrice: 23000,
	},
	{
		productId: "A2433333",
		productName: "緩衝材ロール30mm",
		productPrice: 23000,
	},
	{
		productId: "A2533333",
		productName: "名刺用紙 平和堂 350-h",
		productPrice: 4020000,
	},
	{
		productId: "A2633333",
		productName: "ダンボール クラフトボール紙",
		productPrice: 23000,
	},
	{
		productId: "A2333334",
		productName: "ギフトボックス32個セット",
		productPrice: 23000,
	},
];

const productDetail = [
	{
		productId: "A124567",
		productName: "カーボンペンC2-W",
		productTotal: 9600,

		// 仕入れ商品
		purchasedProducts: [
			{
				purchasingId: "A2333333",
				productName: "カーボンペンC2-W",
				unitPrice: 800,
				purchasingQuantity: 12,
				purchasingDate: "2020/03/05",
				totalPrice: 9600,
			},
			{
				purchasingId: "A2433333",
				productName: "緩衝材ロール30mm",
				unitPrice: 960,
				purchasingQuantity: 3,
				purchasingDate: "2020/03/05",
				totalPrice: 2800,
			},
			{
				purchasingId: "A2533333",
				productName: "名刺用紙 平和堂 350-h",
				unitPrice: 1520,
				purchasingQuantity: 5,
				purchasingDate: "2020/03/05",
				totalPrice: 4560,
			},
			{
				purchasingId: "A2633333",
				productName: "ダンボール クラフトボール紙",
				unitPrice: 1674,
				purchasingQuantity: 20,
				purchasingDate: "2020/03/05",
				totalPrice: 3480,
			},
			{
				purchasingId: "A2333334",
				productName: "ギフトボックス32個セット",
				unitPrice: 2370,
				purchasingQuantity: 4,
				purchasingDate: "2020/03/05",
				totalPrice: 9480,
			},
		],
	},
];

const strages = [strage];
const purchasingLists = purchasingList;
const purchasingDetails = purchasingDetail;

/**
 * HTTP の GET メソッドを待ち受けてステータスコードと文字列、メッセージリストを返す
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *   status:200,
 *   response: 'メッセージリストを返却',
 *   messages:{{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.get("/get", function (req, res, next) {
	res.status(200);

	res.json({
		status: 200,
		response: "仕入れリストを返却",
		messages: strages,
	});
});

router.get("/purchasing-list", function (req, res, next) {
	res.status(200);

	res.json({
		status: 200,
		response: "仕入れリストを返却",
		messages: purchasingLists,
	});
});

router.get("/purchasing-detail", function (req, res, next) {
	res.status(200);

	res.json({
		status: 200,
		response: "仕入れ詳細を返却",
		messages: purchasingDetails,
	});
});

router.get("/product-list", function (req, res, next) {
	res.status(200);

	res.json({
		status: 200,
		response: "仕入れリストを返却",
		messages: productList,
	});
});

router.get("/product-detail", function (req, res, next) {
	res.status(200);

	res.json({
		status: 200,
		response: "仕入れ詳細を返却",
		messages: productDetail,
	});
});

/**
 * httpのpostメソッドを待ち受けてメッセージを登録する
 * 成功時、ステータスコードと文字列、登録後のメッセージリストを返却する
 *
 * レスポンスは下記JSONフォーマットで返却する
 * {
 *   status: 200,
 *   response: 'メッセージリストを登録する'
 *   messages: {{メッセージリスト}}
 * }
 */
router.post("/post", function (req, res, next) {
	if (!req.body.id || req.body.id === "") {
		res.status(400);
		res.json({ status: 400, response: "ID設定エラー" });
		return;
	}

	for (let i = 0; i < strages.length; i++) {
		if (req.body.id === strages[i].id) {
			res.status(409);
			res.json({ status: 409, response: "ID重複エラー", messages: req.body });
			return;
		}
	}
	const localStrage = {
		id: req.body.id,
		message: req.body.message,
	};
	strages.push(localStrage);

	res.status(200);
	res.json({
		status: 200,
		response: "メッセージを登録",
		messages: strages,
	});
});

/**
 * put メソッド メッセージを更新する
 * 成功時、ステータスコードと文字列、更新後のメッセージリストを返却
 *
 * レスポンスは下記のJSONフォーマットで返却する
 * {
 *  status:200,
 * response:'メッセージを更新',
 * messages:{{メッセージリスト}}
 * }
 * といった JSON が返却される
 */
router.put("/put", function (req, res, next) {
	if (!req.body.id || req.body.id === "") {
		res.status(400);
		res.json({
			status: 400,
			response: "IDが未設定",
			message: req.body,
		});
		return;
	}

	for (let i = 0; i < strages.length; i++) {
		if (req.body.id === strages[i].id) {
			strages[i].message = req.body.message;
			res.status(200);
			res.json({
				status: 200,
				response: "メッセージを更新",
				messages: strages,
			});
			return;
		}
	}

	res.status(404);
	res.json({
		status: 404,
		response: "対象メッセージが存在しません",
		messages: req.body,
	});
});

/**
 * HTTP の DELETEメソッド
 * 成功時、ステータスコードと文字列、削除後のメッセージリストを返却
 *
 * レスポンスは下記のJSONフォーマットで返却
 * {
 *   status: 200,
 *   response: 'メッセージを削除',
 *   message: {{メッセージリスト}}
 * }
 */
router.delete("/delete", function (req, res, next) {
	if (!req.body.id || req.body.id === "") {
		res.status(400);
		res.json({
			status: 400,
			response: "IDが未設定です",
			message: req.body,
		});
		return;
	}

	for (let i = 0; i < strages.length; i++) {
		if (req.body.id === strages[i].id) {
			strages.splice(i, 1);
			res.status(200);
			res.json({
				status: 200,
				response: "メッセージを削除",
				messages: strages,
			});
			return;
		}
	}

	res.status(404);
	res.json({
		status: 404,
		response: "対象のメッセージが存在しません",
		messages: req.body,
	});
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
