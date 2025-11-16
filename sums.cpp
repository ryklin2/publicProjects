int sum(int N, int A[]) {
    int total = 0;
    for int i = 0; i < N, i++ {
        total += A[i];
    }
}

void sum(int N, int A[], int Y[]) {
    for int i = 0; i < N; i++ {
        Y[i] = 0;
        for int j = 0; j <= i; j++ {
            Y[i] += A[j];
        }
}


void sum(int N, int A[], int Y[]) {
    #pragma omp parallel for
    for int i = 0; i < N; i++ {
        Y[i] = 0;
        for int j = 0; j <= i; j++ {
            Y[i] += A[j];
        }
    }
}

int main() {
    return 0;
}