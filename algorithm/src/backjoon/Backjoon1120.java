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

        int firstDiff = 0;

        for (int i = 0; i < A.length; i++) {
            if (A[i] != B[i]) {
                firstDiff++;
            }
        }

        int secondDiff = 0;
        for (int i = B.length - 1; i >= B.length - A.length ; i--) {
            if (A[i - (B.length - A.length)] != B[i]) {
                secondDiff++;
            }
        }

        System.out.println(Math.min(firstDiff, secondDiff));

    }
}
