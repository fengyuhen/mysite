import redis
import datetime
from pymysql import connect
import logging
from time import sleep


class RedisUpdate:

    def __init__(self):
        self.pool = redis.ConnectionPool(host='localhost', port=6379, db=1)
        self.date = datetime.datetime.now()
        self.sql_db = SqlDB()
        self.item_ids = None
        self.item_class_ids = None
        self.supplier_ids = None
        self.failure_list = []

    def get_redis(self):
        return redis.Redis(connection_pool=self.pool)

    def update_sale(self):
        self.item_ids = self.sql_db.get_all_item_info()
        self.item_class_ids = self.sql_db.get_all_item_class_info()
        self.update_sale_day_item_info(self.item_ids)
        self.update_sale_day_item_class_info(self.item_class_ids)
        self.update_sale_week_item_info(self.item_ids)
        self.update_sale_week_item_class_info(self.item_class_ids)
        self.update_sale_month_item_info(self.item_ids)
        self.update_sale_month_item_class_info(self.item_class_ids)
        self.update_sale_year_item_info(self.item_ids)
        self.update_sale_year_item_class_info(self.item_class_ids)

    def update_sale_day_item_info(self, item_ids):
        path = ['sale', 'day', 'item']
        for item_id in item_ids:
            # 返回封装好的json
            result = self.sql_db.get_sale_day_item_info(item_id, self.date)
            try_count = 0
            flag = False
            while try_count < 5:
                try:
                    flag = RedisStore.store_data(path, result)
                    if flag:
                        break
                except Exception as e:
                    print(e)
                    sleep(5)
            if not flag:
                self.failure_list.append([path, self.date, result])



    def update_sale_day_item_class_info(self, item_class_ids):
        pass

    def update_sale_week_item_info(self, item_ids):
        pass

    def update_sale_week_item_class_info(self, item_class_ids):
        pass

    def update_sale_month_item_info(self, item_ids):
        pass

    def update_sale_month_item_class_info(self, item_class_ids):
        pass

    def update_sale_year_item_info(self, item_ids):
        pass

    def update_sale_year_item_class_info(self, item_ids):
        pass

    def update_goods_order(self):
        pass

    def update_stock(self):
        pass

    def update_canceled_goods(self):
        pass

    def update_member(self):
        pass


class SqlDB:

    def __init__(self):
        self.sql_connection = connect(host='xxx.xxx.xxx.xxx', user='xxx', passwd='xxx', port=3306,
                                      db='xxx', charset='utf-8')

    def get_all_item_info(self):
        return 1

    def get_all_item_class_info(self):
        return 1

    def get_sale_day_item_info(self, item_id, date):
        return 1


class RedisStore:

    def __init__(self):
        pass

    def store_data(self, path, value):
        return True