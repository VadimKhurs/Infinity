#include <node_api.h>
#include <Windows.h>
#include <mmsystem.h>
#include <string>

#pragma comment(lib, "winmm.lib")

napi_value start(napi_env env, napi_callback_info info){
    size_t argc = 1;

    napi_value args[1];

    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    //get size of string
    size_t str_size;
    size_t str_size_read;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_size);

    //get string
    char * buf;
    buf = (char*)calloc(str_size + 1, sizeof(char));
    str_size = str_size + 1;
    napi_get_value_string_utf8(env, args[0], buf, str_size, &str_size_read);
    
    std::string command = std::string(buf);

    PlaySound(TEXT("odnokratnyiy-piu.mp3"), NULL, SND_FILENAME | SND_ASYNC | SND_LOOP);

    free(buf);
    return napi_value(0);
}

napi_value init(napi_env env, napi_value exports)
{
    napi_value resultCode;

    napi_create_function(env, nullptr, 0, start, nullptr, &resultCode);

    return resultCode;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init);