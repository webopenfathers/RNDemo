package com.rndemo;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class TestActivity extends AppCompatActivity {
    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
        setContentView(R.layout.activity_test);

        TextView tv = findViewById(R.id.tv_test);
        tv.setText("目标页面");

        // openUrl的方式
//        Intent intent = getIntent();
//        Uri data = intent.getData();
//        if(data!=null){
//          String name = data.getQueryParameter("name");
//            tv.setText("姓名" + name);
//        }


        // sendIntent的方式
        Intent intent = getIntent();
        String name = intent.getStringExtra("name");
        tv.setText("姓名" + name);
    }
}
