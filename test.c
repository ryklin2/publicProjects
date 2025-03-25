#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <unistd.h>


int main(){
    pid_t pid, pid1;

    //fork a child
    pid = fork();

    if pid < 0 {
        fprintf(stderr, "Fork failed");
        return 1;
    }
    else if (pid == 0) {
        //child process
        pid1 = getpid();
        printf("child: pid = %d\n", pid);
        printf("child: pid1 = %d\n", pid1);
    }
    else {
        //parent process
        pid1 = getpid();
        printf("parent: pid = %d\n", pid);
        printf("parent: pid1 = %d\n", pid1);
        wait(NULL);
    }
}

