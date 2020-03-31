from pymysql import connect


class SqlDB:

    def __init__(self):
        self.sql_connection = connect(host='xxx.xxx.xxx.xxx', user='xxx', passwd='xxx', port=3306,
                                      db='xxx', charset='utf-8')

    def get_all_item_info(self):
        pass