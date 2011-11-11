window.MOCK_XHR_RESPONSES = {};
MOCK_XHR_RESPONSES.task = '{"end": null, "id": "1", "message": "", "resource_uri": "/api/1.0/task/1/", "start": null, "status": "PENDING", "task_name": "redd.tasks.DatasetImportTask", "traceback": null}';
MOCK_XHR_RESPONSES.tasks = '{"meta": {"limit": 20, "next": null, "offset": 0, "previous": null, "total_count": 1}, "objects": [{"end": null, "id": "1", "message": "", "resource_uri": "/api/1.0/task/1/", "start": null, "status": "PENDING", "task_name": "redd.tasks.DatasetImportTask", "traceback": null}]}';
MOCK_XHR_RESPONSES.dataset = '{"creation_date": "2011-11-11T12:37:40.889866", "creator": {"date_joined": "2011-11-04T00:00:00", "email": "panda@pandaproject.net", "first_name": "Redd", "id": "1", "is_active": true, "is_staff": true, "is_superuser": true, "last_login": "2011-11-04T00:00:00", "last_name": "", "resource_uri": "/api/1.0/user/1/", "username": "panda"}, "current_task": {"end": null, "id": "1", "message": "Preparing to import", "resource_uri": "/api/1.0/task/1/", "start": "2011-11-11T12:37:41.144986", "status": "STARTED", "task_name": "redd.tasks.DatasetImportTask", "traceback": null}, "data_upload": {"creator": "/api/1.0/user/1/", "filename": "contributors6.csv", "id": "1", "original_filename": "contributors.csv", "resource_uri": "/api/1.0/upload/1/", "size": 157}, "description": "", "dialect": {"delimiter": ",", "doublequote": false, "lineterminator": "\r\n", "quotechar": "\"", "quoting": 0, "skipinitialspace": false}, "id": "1", "imported": false, "name": "Test", "resource_uri": "/api/1.0/dataset/1/", "row_count": null, "sample_data": [{"data": ["Brian", "Boyer", "Chicago Tribune"], "row": 1}, {"data": ["Joseph", "Germuska", "Chicago Tribune"], "row": 2}, {"data": ["Ryan", "Pitts", "The Spokesman-Review"], "row": 3}, {"data": ["Christopher", "Groskopf", "PANDA Project"], "row": 4}], "schema": [{"column": "first_name", "indexed": false, "meta_type": null, "simple_type": "unicode"}, {"column": "last_name", "indexed": false, "meta_type": null, "simple_type": "unicode"}, {"column": "employer", "indexed": false, "meta_type": null, "simple_type": "unicode"}]}';
