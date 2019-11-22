<!DOCTYPE html>
<html lang="en">
<head>
	<title>Bootstrap Example</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container">
		<div class="row">
			
		<div class="col-md-3"></div>
			<div class="col-md-6">
				<h3>Play Dogs API</h3>
				<form autocomplete="off" id="form_id">

					<div class="form-group row">
						<div class="col-md-7" id="breed_option">
						</div>
						<div class="col-md-4" >
							<input type="text" class="form-control" id="breed_count" name="text" placeholder="Number Of Dogs">
						</div>

						<div class="col-md-1">
							<button type="submit" class="btn btn-default">Submit</button>
						</div>
					<div class="form-group" id="select_option"></div>

					</div>
				</form>
			</div>
		<div class="col-md-3"></div>
		</div>


		<div class="col-md-3"></div>
			<div class="col-md-6">
				<div id="get_dog"></div>
			</div>
		<div class="col-md-3"></div>


	</div>



	<script src="js/app.js"></script>
</body>
</html>
