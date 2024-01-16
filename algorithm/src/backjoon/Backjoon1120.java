package backjoon;

/*
https://www.acmicpc.net/problem/1120
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Backjoon1120 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        char[] A = st.nextToken().toCharArray();
        char[] B = st.nextToken().toCharArray();

        int min = Integer.MAX_VALUE;
        for (int i = 0; i <= B.length - A.length; i++) {
            int cnt = 0;
            for (int j = 0; j < A.length; j++) {
                if (A[j] != B[i + j]) {
                    cnt++;
                }
            }
            min = Math.min(min, cnt);
        }
        System.out.println(min);
    }
}
