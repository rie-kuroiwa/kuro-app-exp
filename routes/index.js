var express = require("express");
var router = express.Router();

var strage = {
	id: 0,
	message: "デフォルトメッセージ",
};

const strages = [strage];

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
		response: "メッセージリストを返却",
		messages: strages,
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
